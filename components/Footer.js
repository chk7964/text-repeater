
export default function footer() {
 return (
<>
<div className=" w-full bg-gradient-to-r from-yellow-400 to-orange-400 text-white text-center">

  <a className="text-center text-white inline-block p-4 no-underline hover:bg-slate-400" href="#">Home</a>
  <a className="text-center text-white inline-block p-4 no-underline hover:bg-slate-400" href="#">About Us</a>
  <a className="text-center text-white inline-block p-4 no-underline hover:bg-slate-400" href="#">Contact Us</a>
  <a className="text-center text-white inline-block p-4 no-underline hover:bg-slate-400" href="#">Privacy Policy</a>

  <p className="m-0 bg-orange-700">Copyright &copy; <b>{new Date().getFullYear()}</b> Text Repeater All Rights Reserved | Made By Chandradeep</p>
</div>
  </>
 )
}

