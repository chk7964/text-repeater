
export default function Navbar() {
 return (
  <div>
<div className="w-full bg-gradient-to-r from-yellow-400 to-orange-400 text-white text-center font-bold text-3xl">
  <p className="hover:text-blue-500"><a href="./">Text Repeater</a></p>
</div>

<div className="scrollmenu bg-black overflow-auto whitespace-nowrap text-center">
 
  <a className="no-underline text-white  inline-block text-center p-4 hover:bg-orange-100" href="./">Home</a>
  <a className="no-underline text-white inline-block text-center p-4 hover:bg-orange-100" href="./text-repeater">Text Repeater</a>
  <a className="no-underline text-white inline-block text-center p-4 hover:bg-orange-100" href="https://agecalculator.lotusbit.com/">Age Calculator</a>
  <a className="no-underline text-white inline-block text-center p-4 hover:bg-orange-100" href="https://name.lotusbit.com/">Stylish Text Generator</a>
  <a className="no-underline text-white inline-block text-center p-4 hover:bg-orange-100" href="https://fest-clock.lotusbit.com/"> Fest Clock</a>

</div>
    
  </div>
 )
}