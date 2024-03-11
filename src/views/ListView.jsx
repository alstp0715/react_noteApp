import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { setSaveList } from '../store/reducers.jsx'

const Listview = () => {
    const dispatch = useDispatch()
    const saveList = useSelector((state) => state.saveList)

    const [searchValue, setSearchValue] = useState('')
    const [filterSaveList, setFilterSaveList] = useState([...saveList])

    const handleReset = () => {
        dispatch(setSaveList([]))
        localStorage.clear()
    }

    useEffect(() => {
        const storedTexts = localStorage.getItem('saveList')
        if (storedTexts) {
            dispatch(setSaveList(JSON.parse(storedTexts)))
        }
    }, [dispatch])

    useEffect(() => {
        const filterList = saveList.filter((item) => item.title.toUpperCase().includes(searchValue.toUpperCase()))
        setFilterSaveList(filterList)
    }, [searchValue, saveList])

    return (
        <div className="content">
            <input
                type="text"
                value={searchValue}
                onChange={(e) => {
                    setSearchValue(e.target.value)
                }}
                placeholder="검색어를 입력해주세요a"
            />
            <div className="list">
                <h2 className="title">SaveText List</h2>
                <ul>
                    {filterSaveList.map((item, index) => (
                        <li key={index}>
                            <p>{item.id}</p>
                            <p>{item.title}</p>
                            <p>{item.text}</p>
                        </li>
                    ))}
                </ul>
            </div>
            <div className="button-box">
                <Link to="/detail">
                    <button>글쓰기</button>
                </Link>
                <button onClick={handleReset}>초기화</button>
            </div>
        </div>
    )
}

export default Listview
