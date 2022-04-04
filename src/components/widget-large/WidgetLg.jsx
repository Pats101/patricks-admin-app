import "./WidgetLg.css";

export default function WidgetLg() {
    const Button = ({type}) => {
        return <button className={"widgetLgButton " + type}>{type}</button>
    }
  return (
    <div className='widgetLg'>
        <h3 className="widgetLgTitle">Latest Transactions</h3>
        <table className="widgetLgTable">
            <tr className="widgetLgTr">
                <th className="widgetLgTh">Customer</th>
                <th className="widgetLgTh">Date</th>
                <th className="widgetLgTh">Amount</th>
                <th className="widgetLgTh">Status</th>
            </tr>
            <tr className="widgetLgTr">
                <td className="widgetLgUser">
                    <img src="https://media-exp1.licdn.com/dms/image/C4E03AQHvDaaJPEki6w/profile-displayphoto-shrink_400_400/0/1602600035922?e=2147483647&v=beta&t=LsJaedBbp2zJKgHs1a8YesBANdwalJHJXJkvoav_nT4" alt="" className="widgetLgImg" />
                    <span className="widgetLgName">Nkosiyapha Gxarisa</span>
                </td>
                <td className="widgetLgDate">2 Apr 2022</td>
                <td className="widgetLgAmount">R115.00</td>
                <td className="widgetLgStatus"><Button type="Approved"/></td>
            </tr>
            <tr className="widgetLgTr">
                <td className="widgetLgUser">
                    <img src="https://media-exp1.licdn.com/dms/image/D4D35AQFJHWBA4vAN4g/profile-framedphoto-shrink_400_400/0/1626431475907?e=1649005200&v=beta&t=YU94R4JGt1Fvq0jpOMiSKxE3wdjaRcE5M_85cdZzsKM" alt="" className="widgetLgImg" />
                    <span className="widgetLgName">Aphelele Mapuko</span>
                </td>
                <td className="widgetLgDate">2 Apr 2022</td>
                <td className="widgetLgAmount">R115.00</td>
                <td className="widgetLgStatus"><Button type="Decline"/></td>
            </tr>
            <tr className="widgetLgTr">
                <td className="widgetLgUser">
                    <img src="https://media-exp1.licdn.com/dms/image/C4D03AQHy9WJVEgVw2g/profile-displayphoto-shrink_400_400/0/1590400508367?e=1654128000&v=beta&t=LQ4NcDAY2Ks1DAuDjc6H1sl6RUU_78ZESPYiL5vs2uo" alt="" className="widgetLgImg" />
                    <span className="widgetLgName">Tavong Majoni</span>
                </td>
                <td className="widgetLgDate">2 Apr 2022</td>
                <td className="widgetLgAmount">R115.00</td>
                <td className="widgetLgStatus"><Button type="Pending"/></td>
            </tr>
            <tr className="widgetLgTr">
                <td className="widgetLgUser">
                    <img src="https://media-exp1.licdn.com/dms/image/C4D03AQFpowVO2ocXQA/profile-displayphoto-shrink_400_400/0/1612596030535?e=1654128000&v=beta&t=5x2hAiot_PtvxysTyb0vI414h4GsapB2ZAcoKqWuL3I" alt="" className="widgetLgImg" />
                    <span className="widgetLgName">Maliviwe Mgudlwa</span>
                </td>
                <td className="widgetLgDate">2 Apr 2022</td>
                <td className="widgetLgAmount">R115.00</td>
                <td className="widgetLgStatus"><Button type="Approved"/></td>
            </tr>
            <tr className="widgetLgTr">
                <td className="widgetLgUser">
                    <img src="https://media-exp1.licdn.com/dms/image/C4E03AQGDDH7TwHLMzg/profile-displayphoto-shrink_400_400/0/1645114765561?e=2147483647&v=beta&t=hFFyo5a8MLvGO-MnPbXqoqJPhH8jaZOqj8LVtYm4Nhk" alt="" className="widgetLgImg" />
                    <span className="widgetLgName">Tonde Ganman</span>
                </td>
                <td className="widgetLgDate">2 Apr 2022</td>
                <td className="widgetLgAmount">R115.00</td>
                <td className="widgetLgStatus"><Button type="Decline"/></td>
            </tr>
        </table>
    </div>
  )
}
