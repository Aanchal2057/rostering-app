// ** React Imports
import { Fragment, useState } from 'react'

// ** Custom Components
import classnames from 'classnames'
import { CardBody, Button, CustomInput } from 'reactstrap'

// ** illustration import
import illustration from '@src/assets/images/pages/calendar-illustration.png'

// ** Filters Checkbox Array


const SidebarLeft = props => {
  // ** Props
  const { handleAddEventSidebar, toggleSidebar, updateAllFilters, updateFilter, store, dispatch } = props
  const [Assigned, setAssigned] = useState({
    all: true,
    Assigned: false,
    unAssigned:false
  })

  const filters = [
  { label: 'Unassigned', color: 'danger', className: 'custom-control-danger mb-1', val:1, statusUnassigned:Assigned.unAssigned },
  { label: 'Assigned', color: 'primary', className: 'custom-control-primary mb-1', val:0, statusUnassigned:Assigned.Assigned }
]
  // ** Function to handle Add Event Click
  const handleAddEventClick = () => {
    toggleSidebar(false)
    handleAddEventSidebar()
  }

  const handleChecked = (val) => {
    if (val === 'all') {
      setAssigned({
          all: true,
    Assigned: false,
    unAssigned:false
      })
    } else if (val === 'Assigned') {
        setAssigned({
          all: false,
    Assigned: true,
    unAssigned:false
      })
    } else {
          setAssigned({
          all: false,
    Assigned: false,
    unAssigned:true
      })
    }
  }
  console.log(store?.includes(store?.statusUnassigned))
  console.log(Assigned)
  return (
    <Fragment>
      <div className='sidebar-wrapper'>
        <CardBody className='card-body d-flex justify-content-center my-sm-0 mb-3'>
          <Button.Ripple color='primary' block onClick={handleAddEventClick}>
            <span className='align-middle'>Add New Schedule</span>
          </Button.Ripple>
        </CardBody>
        <CardBody>
          <h5 className='section-label mb-1'>
            <span className='align-middle'>Filter</span>
          </h5>
          <CustomInput
            type='checkbox'
            className='mb-1'
            label='View All'
            id='view-all'
            onClick={() => handleChecked('all')}
            checked={Assigned.all}
            onChange={e => dispatch(updateAllFilters())}
            />
          <div className='calendar-events-filter'>
            {filters.length &&
              filters.map(filter => {
                console.log(filter)
                return (
                  <CustomInput
                    type='checkbox'
                    key={filter.label}
                    id={filter.label}
                    label={filter.label}
                    onClick={() => handleChecked(filter.label)}
                    checked={filter.statusUnassigned}
                    className={classnames({
                      [filter.className]: filter.className
                    })}
                    onChange={e => dispatch(updateFilter(filter.val))}  
                  />
                )
              })}
          </div>
          
        </CardBody>
      </div>
      <div className='mt-auto'>
        <img className='img-fluid' src={illustration} alt='illustration' />
      </div>
    </Fragment>
  )
}

export default SidebarLeft
