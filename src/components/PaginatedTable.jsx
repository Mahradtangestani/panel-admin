import React, { useEffect, useState } from 'react';


let numOfPage = 2
const PaginatedTable = ({data , dataInfo , additionalField}) => {


    const [tableData , setTableData] = useState([])
    const [currentPage , setCurrentPage] = useState(1)

    const [pages , setPages] = useState([])
    const [pageCount , setPageCount] = useState(1)


    useEffect(()=>{
    let pCount = Math.ceil(data.length / numOfPage)
    setPageCount(pCount)
    let pArr = []
    for (let i = 1; i <= pCount; i++) pArr = [...pArr, i]
    setPages(pArr)
    } , [])

    useEffect(()=>{
      let start = (currentPage*numOfPage)-numOfPage // 0
      let end = (currentPage*numOfPage) // 2
      setTableData(data.slice(start , end))
    } , [currentPage])

    return (
       <>
        <table className="table table-responsive text-center table-hover table-bordered">
                <thead className="table-secondary">
                    <tr>
                        {dataInfo.map(i=>(
                            <th key={i.field}>{i.title}</th>
                        ))}
                        {additionalField ? (
                            <th>{additionalField.title}</th>
                        ) : null}
                    </tr>
                </thead>
                <tbody>
                    {tableData.map(d=>(
                        <tr key={d.id}>
                            {dataInfo.map(i=>(
                                <td key={i.field+"_"+d.id}>{d[i.field]}</td>
                            ))}
                            {additionalField ? (
                            <th>{additionalField.elements(d.id)}</th>
                        ) : null}
                        </tr>
                    ))}
                </tbody>
            </table>
            <nav aria-label="Page navigation example" className="d-flex justify-content-center">
                <ul className="pagination dir_ltr">
                  <li className="page-item">
                    <span className={`page-link pointer ${currentPage == 1 ? "disable" : ""}`} aria-label="Previous" onClick={()=>setCurrentPage(currentPage - 1)}>
                      <span aria-hidden="true">&raquo;</span>
                    </span>
                  </li>
                  {pages.map(page=>(
                    <li key={page} className="page-item pointer"><span className={`page-link ${currentPage == page ? "alert-success" : ""}`} onClick={()=>setCurrentPage(page)}>{page}</span></li>
                  ))}
                  
                  <li className="page-item">
                    <span className={`page-link pointer ${currentPage == pageCount ? "disable" : ""}`} aria-label="Next" onClick={()=>setCurrentPage(currentPage + 1)}>
                      <span aria-hidden="true">&laquo;</span>
                    </span>
                  </li>
                </ul>
              </nav> 
       </>
    );
}

export default PaginatedTable;
