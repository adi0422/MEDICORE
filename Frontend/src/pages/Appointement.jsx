import React, { useContext, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { AppContext } from '../context/AppContext'

const Appointement = () => {

  const {docId} = useParams()
  const {doctors} = useContext(AppContext)

  const [docInfo,setDocInfo] = useState(null)
  const fetchDocinfo = async ()=>{
    const docInfo = doctors.find(doc => doc._id === docId)
    setDocInfo(docInfo)
    console.log(docInfo)
  }
  useEffect(()=>{
    fetchDocinfo()
    console.log(doctors, docId)
  },[doctors,docId])
  return (
    <div>
      {/*---- Doctor Details----*/}
      <div>
        <div>
          <img src={docInfo.image} alt="" />
        </div>
      </div>
    </div>
  )
}

export default Appointement
