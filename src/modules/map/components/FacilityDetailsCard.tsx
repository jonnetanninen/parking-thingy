import { Facility } from '../../../types/Facility';
import css from './FacilityDetailsCard.module.scss';
import { useTranslation } from 'react-i18next';
import { getTranslation } from '../../../utils/getTranslation';

const FacilityDetailsCard = ({ facility }: { facility: Facility }) => {
  const { t, i18n } = useTranslation();
  const currentLang = i18n.language;

  const { name, status, pricingMethod, builtCapacity, type } = facility;

  return (
    <div className={css.container}>
      <p><b>{t('MAP:name')}: </b>{getTranslation(name, currentLang)}</p>
      <p><b>{t('MAP:type')}: </b>{type}</p>
      <p><b>{t('MAP:status')}: </b>{status}</p>
      <p><b>{t('MAP:pricingMethod')}: </b>{pricingMethod}</p>
      <p><b>{t('MAP:capacity')}: </b>{/*builtCapacity*/}</p>
    </div>
  );
};

export default FacilityDetailsCard;
