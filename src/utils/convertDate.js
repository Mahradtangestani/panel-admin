import jMoment from "jalali-moment"

export const convertdateToJalali = (date)=>{
    return (
        jMoment(date).format("jYYYY/jMM/jDD")
    )
}