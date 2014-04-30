/*$(document).on("ready",inicio);
function inicio ()
{
	alert('hola');
}*/
/*$('.publicar').on('click', publicar);
function publicar ()
{
	alert('hola');
}*/
/*alert("hola2");*/
/*$("#hola").on('click', function  () 
{
	alert('click');
});*/
/*$("#hola").click(function  ()
{
	alert("hola");
});*/
$(document).on('ready',inicio)
	function inicio ()
	{
		$('.publicar').on('click',inicio2)
		function inicio2 () 
		{
			$("header").css({
			   "background-color": "red",
			   "position": "absolute",
			   "width": "100px",
			   "top": "100px",
			   "left": "200px"
			});
		}
	}