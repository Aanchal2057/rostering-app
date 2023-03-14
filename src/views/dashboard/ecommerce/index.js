import { Row, Col } from 'reactstrap'
import { ThemeColors } from '@src/utility/context/ThemeColors'
import '@styles/react/libs/charts/apex-charts.scss'
import '@styles/base/pages/dashboard-ecommerce.scss'
import { Staffs, Clients, loadEvent } from '../../../redux1/action/auth'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect, useState } from 'react'
const EcommerceDashboard = () => {
  const [currentPage, setCurrentPage] = useState(1)
  const [currentPage1, setCurrentPage1] = useState(1)
  //staffs
  const dispatch = useDispatch()
  useEffect(() => {
    
    dispatch(Staffs(currentPage))
   
  }, [dispatch, currentPage])
  const data = useSelector(state => state.Staffs)
  const staffs = data.staffs?.staff
  const totalStaffs = Array.isArray(staffs) ? staffs.length : 0

  //clients
  useEffect(() => {
    
    dispatch(Clients(currentPage1))
   
  }, [dispatch, currentPage1])
  
  const data1 = useSelector(state => state.Clients)
  const clients = (data1.client?.clients)
  const totalClients = Array.isArray(clients) ? clients.length : 0
  //upcomming
  useEffect(() => {
    dispatch(loadEvent())
}, [dispatch])
const eventData = useSelector(state => state?.Event?.event)
console.log(eventData)
const displaydata = eventData?.filter(word => word.statusUpcomming)
const totalUpcomming = Array.isArray(displaydata) ? displaydata.length : 0
//completed
const completed = eventData?.filter(word => word.statusComplete)
const totalCompleted = Array.isArray(completed) ? completed.length : 0
//failed
const failed = eventData?.filter(word => word.statusFailed)
const totalFailed = Array.isArray(completed) ? completed.length : 0

  return (
    <div id='dashboard-ecommerce'>
      <div className="container">
        <div className="row">
          <div className="col-sm-3">
            <div className="card" style={{ padding:'60px' }}>
              <div className="card-block text-center">
                <h4 className="card-title">Total Client</h4>
                <p className="card-text">{totalClients}</p>
              </div>
            </div>
          </div>
          <div className="col-sm-3">
            <div className="card" style={{ padding:'60px' }}>
              <div className="card-block text-center">
                <h4 className="card-title">Total Staffs</h4>
                <p className="card-text">{totalStaffs}</p>
              </div>
            </div>
          </div>
          <div className="col-sm-3">
            <div className="card" style={{ padding:'60px' }}>
              <div className="card-block text-center">
                <h4 className="card-title" >Client Invoices</h4>
                <p className="card-text">5</p>
              </div>
            </div>
          </div>
          <div className="col-sm-3">
            <div className="card" style={{ padding:'60px' }}>
              <div className="card-block text-center">
                <h4 className="card-title">Staff Invoices</h4>
                <p className="card-text">5</p>
              </div>
            </div>
          </div>
          <div className="col-sm-3">
            <div className="card" style={{ padding:'60px' }}>
              <div className="card-block text-center">
                <h4 className="card-title">Upcomming Schedules</h4>
                <p className="card-text">{totalUpcomming}</p>
              </div>
            </div>
          </div>
          <div className="col-sm-3">
            <div className="card" style={{ padding:'60px' }}>
              <div className="card-block text-center">
                <h4 className="card-title">Completed <br></br>Schedules</h4>
                <p className="card-text">{totalCompleted}</p>
              </div>
            </div>
          </div>
          <div className="col-sm-3">
            <div className="card" style={{ padding:'60px' }}>
              <div className="card-block text-center">
                <h4 className="card-title">Failed <br></br>Schedules</h4>
                <p className="card-text">{totalFailed}</p>
              </div>
            </div>
          </div>
          {/* <div className="col-sm-3">
            <div className="card" style={{ padding:'60px' }}>
              <div className="card-block text-center">
                <h4 className="card-title">Total Client</h4>
                <p className="card-text">5</p>
              </div>
            </div>
          </div> */}
        </div>
      </div>
    </div>

  )
}

export default EcommerceDashboard
