function addToResult(num)
{
 result.value+=num
}
function clearResult()
{
    result.value=""
}
function back()
{

}
function equal()
{
    try{
        result.value=eval(result.value)
    }
    catch(error)
    {
        result.value ='error'
        setTimeout(()=>{
            result.value=""},1000)
        
    }
   
}
