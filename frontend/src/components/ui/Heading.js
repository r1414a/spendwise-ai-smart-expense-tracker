export default function Heading({css,heading}){
    return <h1 className={`text-4xl font-bold capitalize ${css}`}>{heading}</h1>
}