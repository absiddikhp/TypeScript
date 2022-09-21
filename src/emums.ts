enum RType{SUCCESS,FAILER,UNAUTHENTICATE,FORBIDDEN}

interface APIResponseInterface<T>{
status:number;
type:RType;
data:T
}

const response2 : APIResponseInterface<number[]>={
    status:200,
    type:RType.SUCCESS,
    data:[2,3,3,33]
}
console.log(response2);
