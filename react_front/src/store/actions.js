import axios from 'axios';

export const RECORDS_INIT = 'RECORDS_INIT';
export const RECORDS_ERROR = 'RECORDS_ERROR';
export const RECORDS_SUCCESS = "RECORDS_SUCCESS";




export const fetchRecords = ()=>{
    console.log("fetchRecordds")
    return dispatch=>{
    axios.get('http://localhost:8000/records')
    .then((res)=>{
    console.log(res);
    dispatch(setRecords(res.data))})
    .catch(err=>{
        console.log(err)
    })
    

    }}



    export const setRecords=(recordsIn)=>{
 console.log(recordsIn)

            return {
                type : 'RECORDS_SUCCESS',
                content : recordsIn
            }
        }

