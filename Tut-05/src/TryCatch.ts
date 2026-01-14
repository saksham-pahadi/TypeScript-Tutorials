try{

}catch(error){
    if (error instanceof Error) {
        console.log(`Error occurred: ${error.message}`);
    }
    console.log('An unexpected error occurred.', error);
}

// Example of type assertions and error handling in TypeScript
let response: any = "42";
let numericLength: number = (response as string).length;
console.log(`The length of the response is ${numericLength}.`);

const data:unknown = 'chai or code'
const strData:string = data as string

type role = 'admin' | 'user'

function redirectBasedOnRole(params:role){

}
