import React from 'react';

import { faBell } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import api from '../../services/api.service';

import GenericContentLoader from '../ContentLoader/Warning';
import { useQuery } from '@tanstack/react-query';

interface IDadosEscalaResources {
  escalado: string;
  celular: string;
  ramal: string;
}

interface ISobreaviso {
  nome: string;
  chatId: string;
  om: string;
  dadosEscalaResources: Array<IDadosEscalaResources>;
}

const WarningCard: React.FC = () => {
  const [sobreaviso, setSobreaviso] = React.useState<ISobreaviso[] | null>();

  const escalas = [
    'OFICIAL DE SOBREAVISO TÉCNICO',
    'SOBREAVISO DA TIAD',
    'SOBREAVISO DA TIOP',
    'SOBREAVISO DA TISI',
    'SOBREAVISO DE REDES E TELEFONIA (TTIR/TTTF)',
    'SOBREAVISO TÉCNICO AO RADAR',
    'SOBREAVISO DA TIMC',
    // "TÉCNICO DE DIA À KM",
    // "TÉCNICO DE DIA À SALA TÉCNICA DIURNO",
    // "TÉCNICO DE DIA À SALA TÉCNICA NOTURNO",
  ];

  const { isFetching } = useQuery(
    ['sobreavisos'],
    async () => {
      await api.get('/api/getSobreaviso').then(response => {
        const responseData: ISobreaviso[] = response.data;

        const filteredData = responseData?.filter(item =>
          item.dadosEscalaResources.length === 0 ||
          item.dadosEscalaResources.length < 3
            ? ''
            : escalas.includes(item.nome),
        );

        filteredData.splice(0, 0, filteredData[1]);
        filteredData.splice(2, 1);
        console.log(filteredData);
        setSobreaviso(filteredData);
      });
    },
    {
      refetchInterval: 60000 * 5, //5 minutos
    },
  );

  /**
   * Verifica o sobreaviso da TIOp, visto que a virada ocorre somente
   * a partir das 08:00h
   *
   * @param hora Hora servidor
   * @returns boolean baseado na hora quando entre 00:00h and 07:59h
   */
  function sobreavisoTiop(hora: number): boolean {
    if (hora >= 0 && hora < 8) {
      return true;
    }

    return false;
  }

  /**
   * Verifica o cadastro da agenda no campo ramal do SQUAMIS
   *
   * @param agenda Numero agenda SQUAMIS
   * @returns Agenda ou Não Cadastrado (N/C)
   */
  function parseAgenda(agenda: string) {
    if (!agenda) {
      return 'N/C';
    }

    return agenda;
  }

  return (
    <div className="card border-dark mb-3 center">
      <div className="card-header" style={{ height: 60, fontSize: 30 }}>
        <b>
          <FontAwesomeIcon icon={faBell} />
          &nbsp; SOBREAVISO TÉCNICO
        </b>
      </div>
      <div className="card-body" style={{ height: 350 }}>
        {isFetching && !sobreaviso ? (
          <GenericContentLoader />
        ) : (
          <>
            <table
              className="table table-sm card-header"
              style={{ width: 450 }}
            >
              <thead className="thead-dark">
                <tr>
                  <th scope="col">Escala</th>
                  <th scope="col">Militar</th>
                  <th scope="col">Celular</th>
                  <th scope="col">Agenda</th>
                </tr>
              </thead>
              <tbody>
                {sobreaviso?.map((item, _index) =>
                  item.nome.includes('OFICIAL DE SOBREAVISO TÉCNICO') ? (
                    <tr>
                      <th scope="row">OST</th>
                      <th scope="row">
                        {item.dadosEscalaResources[1].escalado.slice(0, -22)}
                      </th>
                      <th scope="row">(81)98814-4279</th>
                      <th scope="row">6812</th>
                    </tr>
                  ) : (
                    ''
                  ),
                )}
                {sobreaviso?.map((item, _index) =>
                  item.nome.includes('SOBREAVISO DA TIOP') ? (
                    <tr>
                      <th scope="row">TIOp</th>
                      <th scope="row">
                        {item.dadosEscalaResources[1].escalado.slice(0, -22)}
                      </th>
                      <th scope="row">
                        {item.dadosEscalaResources[1].celular}
                      </th>
                      <th scope="row">{item.dadosEscalaResources[1].ramal}</th>
                    </tr>
                  ) : (
                    ''
                  ),
                )}

                {sobreaviso?.map((item, _index) =>
                  item.nome.includes('SOBREAVISO DA TIAD') ? (
                    <tr>
                      <th scope="row">TIAd</th>
                      <th scope="row">
                        {item.dadosEscalaResources[1].escalado.slice(0, -22)}
                      </th>
                      <th scope="row">
                        {item.dadosEscalaResources[1].celular}
                      </th>
                      <th scope="row">{item.dadosEscalaResources[1].ramal}</th>
                    </tr>
                  ) : (
                    ''
                  ),
                )}

                {sobreaviso?.map((item, _index) =>
                  item.nome.includes('SOBREAVISO DA TISI') ? (
                    <tr>
                      <th scope="row">TISI</th>
                      <th scope="row">
                        {item.dadosEscalaResources[1].escalado.slice(0, -22)}
                      </th>
                      <th scope="row">
                        {item.dadosEscalaResources[1].celular}
                      </th>
                      <th scope="row">{item.dadosEscalaResources[1].ramal}</th>
                    </tr>
                  ) : (
                    ''
                  ),
                )}

                {sobreaviso?.map((item, _index) =>
                  item.nome.includes('SOBREAVISO DA TIMC') ? (
                    <tr>
                      <th scope="row">TIMC</th>
                      <th scope="row">
                        {item.dadosEscalaResources[1].escalado.slice(0, -22)}
                      </th>
                      <th scope="row">
                        {item.dadosEscalaResources[1].celular}
                      </th>
                      <th scope="row">{item.dadosEscalaResources[1].ramal}</th>
                    </tr>
                  ) : (
                    ''
                  ),
                )}

                {sobreaviso?.map((item, _index) =>
                  item.nome.includes(
                    'SOBREAVISO DE REDES E TELEFONIA (TTIR/TTTF)',
                  ) ? (
                    <tr>
                      <th scope="row">TTIR/TTTF</th>
                      <th scope="row">
                        {item.dadosEscalaResources[1].escalado.slice(0, -22)}
                      </th>
                      <th scope="row">
                        {item.dadosEscalaResources[1].celular}
                      </th>
                      <th scope="row">{item.dadosEscalaResources[1].ramal}</th>
                    </tr>
                  ) : (
                    ''
                  ),
                )}

                {sobreaviso?.map((item, _index) =>
                  item.nome.includes('SOBREAVISO TÉCNICO AO RADAR') ? (
                    <tr>
                      <th scope="row">TREe</th>
                      <th scope="row">
                        {item.dadosEscalaResources[1].escalado.slice(0, -22)}
                      </th>
                      <th scope="row">
                        {item.dadosEscalaResources[1].celular}
                      </th>
                      <th scope="row">{item.dadosEscalaResources[1].ramal}</th>
                    </tr>
                  ) : (
                    ''
                  ),
                )}
              </tbody>
            </table>
          </>
        )}
      </div>
    </div>
  );
};

export default WarningCard;
