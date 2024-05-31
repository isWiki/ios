const arr = [1,2,3,4]
//数组求和
function sum(arr){
    var b = 0//const是定义常量的，不能更改。var定义的是变量
    for(let i = 0;i < arr.length; i++){
        b = b + arr[i]
    }
    return b
}
//b=0+1 b=1+2 b=3+3 b=6+4

//requirement： 过滤数组中能被5整除的数据并返回一个新数组给别人  对标  filter
//const arr1 = [1,5,3,4,5,10]
function fil(arr1){
    let newArr = []
    for(let i = 0;i < arr1.length; i++){
        if (arr1[i]%5 != 0) {
            newArr.push(arr1[i])
        }
    }
    return  newArr
}


//requirement： 将数组中的数据都乘2返回   对标  for循环
//const arr2 = [1,5,3,4,5,10]
function dou(arr2){
    //var newArr1 = []
    for(let i = 0;i < arr2.length; i++){
        //newArr1.push(arr2[i]*2)
        arr2[i] = arr2[i]*2
    }
    //return  newArr1
    return  arr2
}


//压轴题  requirement ：  使用 直接选择算法   将一个无序的数组 降序排序   可以查找资料
