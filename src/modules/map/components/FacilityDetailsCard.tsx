import { Facility } from '../../../types/Facility';
import css from './FacilityDetailsCard.module.scss';
import { useTranslation } from 'react-i18next';
import { getTranslation } from '../../../utils/getTranslation';
import { Capacity } from '../../../types/Capacity';

const FacilityDetailsCard = ({ facility }: { facility: Facility }) => {
  const { t, i18n } = useTranslation();
  const currentLang = i18n.language;

  const { name, status, pricingMethod, builtCapacity, type } = facility;

  return (
    <div className={css.container}>
      <div className={css.column}>
        <p>
          <b>{t('MAP:name')}: </b>
          {getTranslation(name, currentLang)}
        </p>
        <p>
          <b>{t('MAP:type')}: </b>
          {t('MAP:' + type)}
        </p>
        <p>
          <b>{t('MAP:status')}: </b>
          {t('MAP:' + status)}
        </p>
        <p>
          <b>{t('MAP:pricingMethod')}: </b>
          {t('MAP:' + pricingMethod)}
        </p>
      </div>
      <div className={css.column}>
        <table>
          <thead>
            <tr>
              <th>{t('MAP:vehicleType')}</th>
              <th>{t('MAP:capacity')}</th>
            </tr>
          </thead>
          <tbody>
            {Object.keys(builtCapacity).map((x) => (
              <tr key={x}>
                <td>{t('MAP:' + x)}</td>
                <td>{builtCapacity[x as Capacity]}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default FacilityDetailsCard;
