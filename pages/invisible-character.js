import Head from 'next/head'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ClipboardJS from 'clipboard';
import $ from "jquery";
const newline = () =>  { 
var Text = " ";
  
var repeats = document.getElementById("number").value;
var i = 1;
for (i = 1; i <= repeats; i++) {

  document.getElementById("text1").value += Text + "\n";

};


document.getElementById("repeatButton1").disabled = true;

document.getElementById("repeatButton2").disabled = true;

document.getElementById("repeatButton1").innerHTML = "Repeated";
}


const sameline = () =>  { 
  var Text = " ";
  
  var repeats = document.getElementById("number").value;


var i = 2;

  for (i = 2; i <= repeats; i++) {

    document.getElementById("text1").value += Text + " ";

  };

  document.getElementById("repeatButton2").disabled = true;

  document.getElementById("repeatButton1").disabled = true;

  document.getElementById("repeatButton2").innerHTML = "Repeated";
}


const reset = () =>  { 
  document.getElementById("repeatButton1").disabled = false;
  
  document.getElementById("repeatButton2").disabled = false;

  document.getElementById("repeatButton1").innerHTML = "Repeat (New Line)";

  document.getElementById("repeatButton2").innerHTML = "Repeat (Same Line)";

  $("#text").val('');
  $("#text1").val('');
  $("#number").val('');
}

export default function invisiblecharacter() {
  return (
    <>
    <Head>
      <title>Invisible Text Generator</title>
    </Head>

    <ToastContainer />
      
  
        <h1>What Is Text Repeater?</h1>
        <p className="text-justify">Hey user, if you are want to repeat letter, emoji, and symbol. then you are on the right website here you can repeat your text unlimited times.</p>



        <input className="border border-red-500 w-full rounded p-2 mb-2" cols="25" type="number" id="number" inputMode="numeric" placeholder="Enter Repetitions Number"
          autoComplete="off" />

        <br />
        <textarea className="border border-red-500 w-full rounded p-2" id="text1" placeholder="Output Here" autoComplete="off" rows="5"></textarea>
        <br />

        <div className="">


          <button onClick={newline} className="bg-green-500 rounded text-white p-2 px-4 m-2" type="button" id="repeatButton1"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 inline-block">
  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 5.25l-7.5 7.5-7.5-7.5m15 6l-7.5 7.5-7.5-7.5" />
</svg>
&nbsp;Repeat (New
            Line)</button>



          <button onClick={sameline} className="bg-green-500 rounded text-white p-2 px-4 m-2" type="button" id="repeatButton2" ><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 inline-block">
  <path strokeLinecap="round" strokeLinejoin="round" d="M11.25 4.5l7.5 7.5-7.5 7.5m-6-15l7.5 7.5-7.5 7.5" />
</svg>
&nbsp;Repeat
            (Same Line)</button>



          <button onClick={copy} className="bg-green-500 rounded text-white p-2 px-4 m-2 bt" type="button" data-clipboard-target="#text1"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 inline-block">
  <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 17.25v3.375c0 .621-.504 1.125-1.125 1.125h-9.75a1.125 1.125 0 01-1.125-1.125V7.875c0-.621.504-1.125 1.125-1.125H6.75a9.06 9.06 0 011.5.124m7.5 10.376h3.375c.621 0 1.125-.504 1.125-1.125V11.25c0-4.46-3.243-8.161-7.5-8.876a9.06 9.06 0 00-1.5-.124H9.375c-.621 0-1.125.504-1.125 1.125v3.5m7.5 10.375H9.375a1.125 1.125 0 01-1.125-1.125v-9.25m12 6.625v-1.875a3.375 3.375 0 00-3.375-3.375h-1.5a1.125 1.125 0 01-1.125-1.125v-1.5a3.375 3.375 0 00-3.375-3.375H9.75" />
</svg>
&nbsp;Copy</button>



          <button onClick={reset} className="bg-green-500 rounded text-white p-2 px-4 m-2" type="reset" id="reset"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 inline-block">
  <path strokeLinecap="round" strokeLinejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99" />
</svg>
&nbsp;Reset</button>
        </div>
        <br />

        <br />
        <h1 className='text-xl font-bold'>What Is Invisible Text Generator?</h1>
        <p className="text-justify">Hey user, if you are want to generate invisible text then you are on the right website. Here you can generate your invisible text unlimited times.</p>
        <br />
        <h1 className='text-xl font-bold'>How To Use Invisible Text Generator?</h1>
        <p className="text-justify">Enter the number in the first box when you want to generate invisible text.</p>
    </>
  )
}
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