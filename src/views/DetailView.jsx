import React from 'react'
import { useNavigate } from 'react-router-dom'
import { v4 as uuidv4 } from 'uuid'
import { useDispatch, useSelector } from 'react-redux'
import { setIsForm, setSaveList } from '../store/reducers.jsx'

const DetailView = () => {
    const navigate = useNavigate()
    const userId = uuidv4()
    const dispatch = useDispatch()
    const formData = useSelector((state) => state.formData)
    const saveList = useSelector((state) => state.saveList)

    const handleInputChange = (field, value) => {
        dispatch(setIsForm({ ...formData, [field]: value }))
    }

    const handleSave = () => {
        if (!formData.title || !formData.text) {
            alert('제목과 내용을 모두 입력해주세요.')
            return
        }
        const newList = { ...formData, id: userId }
        const updatedList = [...saveList, newList]
        dispatch(setSaveList(updatedList))
        localStorage.setItem('saveList', JSON.stringify(updatedList))
        dispatch(setIsForm({}))
        navigate('/')
    }

    const handleList = () => {
        navigate('/')
    }

    return (
        <div className="content">
            <input type="text" className="note-title" value={formData.title} onChange={(e) => handleInputChange('title', e.target.value)} placeholder="제목을 입력해주세요" />
            <textarea className="note-text" value={formData.text} onChange={(e) => handleInputChange('text', e.target.value)} placeholder="내용을 입력해주세요" />
            <div className="button-box">
                <button onClick={handleList}>목록</button>
                <button onClick={handleSave}>저장</button>
            </div>
        </div>
    )
}

export default DetailView
