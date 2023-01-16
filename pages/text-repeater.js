import Head from 'next/head'
import $ from "jquery";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ClipboardJS from 'clipboard';

export default function textrepeater() {
  const copy = () =>  {     

    var clipboard = new ClipboardJS('.bt');

    clipboard.on('success', function (e) {
      console.info('Action:', e.action);
      console.info('Text:', e.text);
      console.info('Trigger:', e.trigger);
      toast["success"]("Text Is Copied " + e.text)
    
      e.clearSelection();
      clipboard.destroy();
    });
    
    clipboard.on('error', function (e) {
      toast["warning"]("Output Is Empty");
      console.error('Action:', e.action);
      console.error('Trigger:', e.trigger);
      clipboard.destroy();
    });
  }
  
  const handleClick = () =>  {
  var Text = $("#text").val();
  var repeats = $("#number").val();
  var i = 1;
  for (i = 1; i <= repeats; i++) {
    document.getElementById("text1").value += Text + "\n";
  };

  $("#repeatButton1").attr("disabled", true);
  $("#repeatButton2").attr("disabled", true);
  $("#repeatButton1").html = "Repeated";
  console.log('Free pizza!');
}

  const handleClick1 = () =>  {
    var Text = $("#text").val();
    var repeats = $("#number").val();
    var i = 1;
    for (i = 1; i <= repeats; i++) {
      document.getElementById("text1").value += Text + " ";
    };
  
    document.getElementById("repeatButton2").disabled = true;
  
    document.getElementById("repeatButton1").disabled = true;
  
    document.getElementById("repeatButton2").innerHTML = "Repeated";
    
}

const reset = (e) =>  {
$("#repeatButton1").removeAttr("disabled");
  
$("#repeatButton2").removeAttr("disabled");

$("#repeatButton1").html = "<i class='fa fa-angle-double-down'></i> Repeat (New Line)";

$("#repeatButton2").html = "<i class='fa fa-angle-double-right'></i> Repeat (Same Line)";

$("#text").val('');
$("#text1").val('');
$("#number").val('');
}


  return (
    <>
<Head>
<title>Text Reapeater</title>

</Head>
<ToastContainer />
        <textarea className="border border-red-500 w-full rounded p-2" id="text" placeholder="Enter Text" autoComplete="off" rows="5"></textarea>
        <div className="d-inline-flex ">
          <div className="p-2">
            <b>WORDS:</b>
            <b id="words">0</b>
          </div>
          <div className="p-2">
            <b>CHARACTERS:</b>
            <b id="characters">0</b>
          </div>
        </div>
        <br />
        <input className="border border-red-500 w-full rounded p-2" cols="25" type="number" id="number" inputMode="numeric" placeholder="Enter Repetitions Number"
          autoComplete="off" />
        <br />
        <div className="m-1">
          <button onClick={handleClick} className=" bg-green-500 rounded text-white p-2 px-4 m-2" type="button" id="repeatButton1"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 inline">
  <path strokeLinecap="round" strokeLinejoin="round" d="M11.25 4.5l7.5 7.5-7.5 7.5m-6-15l7.5 7.5-7.5 7.5" />
</svg>
&nbsp; Repeat (New
            Line)</button>
          <button onClick={handleClick1} className="bg-green-500 rounded text-white p-2 px-4" type="button" id="repeatButton2"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 inline">
  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 5.25l-7.5 7.5-7.5-7.5m15 6l-7.5 7.5-7.5-7.5" />
</svg>
&nbsp; Repeat
            (Same Line)</button>
        </div>
        <br />
        <textarea className="border border-red-500 w-full rounded p-2" id="text1" placeholder="Output Here" autoComplete="off" rows="5"></textarea>
        <br />
        <div>
          <button onClick={copy} className="bg-green-500 rounded text-white p-2 px-4 bt" type="button" data-clipboard-target="#text1"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 inline">
  <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 17.25v3.375c0 .621-.504 1.125-1.125 1.125h-9.75a1.125 1.125 0 01-1.125-1.125V7.875c0-.621.504-1.125 1.125-1.125H6.75a9.06 9.06 0 011.5.124m7.5 10.376h3.375c.621 0 1.125-.504 1.125-1.125V11.25c0-4.46-3.243-8.161-7.5-8.876a9.06 9.06 0 00-1.5-.124H9.375c-.621 0-1.125.504-1.125 1.125v3.5m7.5 10.375H9.375a1.125 1.125 0 01-1.125-1.125v-9.25m12 6.625v-1.875a3.375 3.375 0 00-3.375-3.375h-1.5a1.125 1.125 0 01-1.125-1.125v-1.5a3.375 3.375 0 00-3.375-3.375H9.75" />
</svg>

&nbsp; Copy</button>
          <button onClick={reset} className="bg-green-500 rounded text-white p-2 px-4 m-2" type="reset" id="reset"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 inline">
  <path strokeLinecap="round" strokeLinejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99" />
</svg>
&nbsp; Reset</button>
        </div>
        <br />

        <br />
        <h1 className='text-xl font-bold'>What Is Text Repeater?</h1>
        <p className="italic">Hey user, if you are want to repeat letter, emoji, and symbol. then you are on the right website here you can repeat your text unlimited times.</p>
        <br />
        <h1 className='text-xl font-bold'>How To Use Text Repeater?</h1>
        <p className="italic">Hey user, if you are want to repeat letter, emoji, and symbol. then you are on the right website here you can repeat your text unlimited times.</p>

        
      {/* <script src='https://unpkg.com/clipboard@2.0.11/dist/clipboard.min.js' async ></script> */}
      {/* <script src="https://cdnjs.cloudflare.com/ajax/libs/toastr.js/latest/toastr.min.js" async ></script> */}
      {/* <script src="/js/text-repeater/js.js" defer ></script> */}

    </>
  )
}

