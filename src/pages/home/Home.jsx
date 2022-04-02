import React from 'react';
import Chart from '../../components/chart/Chart';
import FeaturedInfo from '../../components/featured-info/FeaturedInfo';
import "./Home.css";
import { userData } from "../../dummyData";
import WidgetSm from '../../components/widget-small/WidgetSm';
import WidgetLg from '../../components/widget-large/WidgetLg';

export default function Home() {
  return (
    <div className='home'>
      <FeaturedInfo />
      <Chart data={userData} title="User Analytics" grid dataKey="Active User"/>
      <div className="homeWidgets">
        <WidgetSm />
        <WidgetLg />
      </div>
    </div>
  )
}
