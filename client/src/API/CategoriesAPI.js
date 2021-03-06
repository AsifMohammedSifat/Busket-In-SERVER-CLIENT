import { useEffect, useState } from "react"
import axios from "axios"

export default function CategoriesAPI() {
    const [categories, setCategories] = useState([])
    const [callback, setCallback] = useState(false)

    useEffect(() => {
        const getCategories = async () => {
            const response = await axios.get(`https://intense-lake-37547.herokuapp.com/api/category`)
            setCategories(response.data)
        }
        getCategories()
    }, [callback])
    return {
        categories: [categories, setCategories],
        callback: [callback, setCallback]
    }
}
