export default function StatCard({title,value}:{title:string;value:string|number}){return <div className="card"><div className="label">{title}</div><div className="value">{value}</div></div>}
