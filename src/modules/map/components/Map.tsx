import React, { useEffect, useState } from 'react';
import css from './Map.module.scss';
import { useTranslation } from 'react-i18next';
import { MapContainer, TileLayer, Polygon } from 'react-leaflet';
import { LatLngExpression } from 'leaflet';
import { Facility } from '../../../types/Facility';
import axios from 'axios';
import FacilityDetailsCard from './FacilityDetailsCard'

const MAP_URL = 'https://tiles.hel.ninja/styles/hel-osm-bright/{z}/{x}/{y}.png';

const Map = () => {
  const { t } = useTranslation();
  const [facilities, setFacilities] = useState<Facility[]>([]);
  const [activeFacility, setActiveFacility] = useState<Facility>();

  useEffect(() => {
    const fetchFacilities = async () => {
      const { data } = await axios.get('https://p.hsl.fi/api/v1/facilities.json');
      setFacilities(data?.results || []);
    };

    fetchFacilities();
  }, []);

  const getPolygonPositions = (facility: Facility): LatLngExpression[] => {
    return facility.location.coordinates[0].map((x: number[]) => [x[1], x[0]]);
  };

  return (
    <div className={css.container}>
      <header>
        <h1>{t('MAP:title')}</h1>
        <p>{t('MAP:content')}</p>
      </header>
      <div className={css.mapWrapper}>
        <MapContainer
          center={[60.17, 24.94]}
          zoom={12}
          maxBounds={[
            [59.4, 23.8],
            [61.5, 25.8],
          ]}
        >
          <TileLayer
            attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            url={MAP_URL}
          />
          {facilities.map((x) => (
            <Polygon key={x.id} eventHandlers={{ click: () => setActiveFacility(x) }} positions={getPolygonPositions(x)} />
          ))}
        </MapContainer>
        <div>
          {activeFacility && <FacilityDetailsCard facility={activeFacility} />}
        </div>
      </div>
    </div>
  );
};

export default Map;
