import './App.css';

function App() {
  const data = [
    {
      type: "FREE",
      month: "0",
      user: "Single User",
      storage: "50GB Storage",
      pub_project: "Unlimited Public Projects",
      Access: "Community Access",
      priv_project: "Unlimited Private Projects",
      Phone_support: "Dedicated Phone Support",
      domain: "Free Subdomain",
      report: "Monthly Status Reports",
      inactive: ["priv_project","Phone_support","domain","report"]
    },
    {
      type: "PLUS",
      month: "9",
      user: "5 Users",
      storage: "50GB Storage",
      pub_project: "Unlimited Public Projects",
      Access: "Community Access",
      priv_project: "Unlimited Private Projects",
      Phone_support: "Dedicated Phone Support",
      domain: "Free Subdomain",
      report: "Monthly Status Reports",
      inactive:["report"]
    },
    {
      type: "PRO",
      month: "49",
      user: "Unlimited Users",
      storage: "50GB Storage",
      pub_project: "Unlimited Public Projects",
      Access: "Community Access",
      priv_project: "Unlimited Private Projects",
      Phone_support: "Dedicated Phone Support",
      domain: "Free Subdomain",
      report: "Monthly Status Reports",
      inactive:[]
    }
  ];

  return (
    <div className='app'>
      {data.map((plan, idx) => {
       const editObjplan= {...plan,}
        delete editObjplan.type
        delete editObjplan.month
        delete editObjplan.inactive
        return(
        <PlanCard
          key={idx}
          type={plan.type}
          month={plan.month}
          inactive={plan.inactive}
          plan={editObjplan}
        />
      )}
      )}
    </div>
  );
}

export default App;

function PlanCard({ type, month,inactive,plan }) {
  // console.log(type,month,plan)
  // {user, storage, pub_project, access, privproj, phsupp, domain, report }=plan
//  const inactive=[...plan.inactive]
 console.log(type,month,plan,inactive)
 
  const objKeys=Object.keys(plan)
  return (
    <div className='card'>
      <div className='head'>
        <p>{type}</p>
        <h1>${month}/month</h1>
        <hr />
      </div>
      <div className='options'>
        <ul className='correct'>
          {
            objKeys.map((value,idx)=>{
              if (inactive.includes(value)){
                return <li className='opac'>
                <span className='cross-symbol'>×</span> {plan[value]}
              </li>
              }else{
                return <li>
                <span className='tick-symbol'>✔</span> {plan[value]}
              </li>
              }
            })
          }         
        </ul>
      </div>
      <div className='btn'>
        <button className='butn'>BUTTON</button>
      </div>
    </div>
  );
}
