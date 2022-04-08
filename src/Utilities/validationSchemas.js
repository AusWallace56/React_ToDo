
import * as Yup from 'yup'

const toDoSchema = Yup.object().shape({
    Action: Yup.string().required(),
    Done: Yup.boolean().required(),
    CategoryId: Yup.number().required()
})

const catSchema = Yup.object().shape({
    Name: Yup.string().max(50, 'Max 50 Characters').required(),
    Description: Yup.string().required()
})

export {toDoSchema};
export default catSchema;