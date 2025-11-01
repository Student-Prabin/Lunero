const SubTitle = ({ title, desc }) => {
  return (
    <div className="flex flex-col items-center gap-2 my-15">
      <p className="text-4xl font-semibold">{title}</p>
      <p className="text-2xl">{desc}</p>
    </div>
  )
}
export default SubTitle