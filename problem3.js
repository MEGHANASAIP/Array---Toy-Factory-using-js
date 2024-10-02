const n=parseInt(prompt());
let arr=[]
for(let i=0;i<n;i++)
{
    arr[i]=parseInt(prompt());
}
let ans1=solve(arr,n);
console.log(ans1.a);
console.log(ans1.b);
function solve(arr,n)
{
    let emp=0;
    let ans=[]
    let k=0;
    for(let j=0;j<n;j++)
    {
        if(arr[j]!=0)
        {
            ans[k]=arr[j];
            k=k+1;
        }
        else
        {
            emp=emp+1;
        }
    }
    while(k!=n)
    {
        ans[k]=0;
        k=k+1;
    }
    return {
        a:ans,
        b:emp
    }
}