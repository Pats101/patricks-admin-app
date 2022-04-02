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
        </table>
    </div>
  )
}
