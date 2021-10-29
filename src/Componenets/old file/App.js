<h1 className="heading">Top 5 Web series in hindee 2021</h1>
   
{SData.map((val,index)=>{
  return <Card
  key={val.id}
  imgSrc={val.imgSrc}
  title={val.title}
  sname={val.sname}
  link={val.link}
   />
})}