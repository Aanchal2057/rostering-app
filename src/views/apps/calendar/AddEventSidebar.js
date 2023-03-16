// ** React Imports
import { Fragment, useState, useEffect } from 'react'

// ** Custom Components
import Avatar from '@components/avatar'

// ** Third Party Components
import classnames from 'classnames'
import { toast } from 'react-toastify'
import Flatpickr from 'react-flatpickr'
import { X, Check, Trash } from 'react-feather'
import Select, { components } from 'react-select'
import { useForm, Controller } from 'react-hook-form'
import { Button, Modal, ModalHeader, ModalBody, FormGroup, Label, CustomInput, Input, Form } from 'reactstrap'
import { Staffs, Clients, addEvents, loadEvent } from '../../../redux1/action/auth'

// ** Utils
import { selectThemeColors, isObjEmpty } from '@utils'

// ** Avatar Images
import img1 from '@src/assets/images/avatars/1-small.png'
import img2 from '@src/assets/images/avatars/3-small.png'
import img3 from '@src/assets/images/avatars/5-small.png'
import img4 from '@src/assets/images/avatars/7-small.png'
import img5 from '@src/assets/images/avatars/9-small.png'
import img6 from '@src/assets/images/avatars/11-small.png'

// ** Styles Imports
import '@styles/react/libs/react-select/_react-select.scss'
import '@styles/react/libs/flatpickr/flatpickr.scss'
import { useSelector } from 'react-redux'


// ** Toast Component
const ToastComponent = ({ title, icon, color }) => (
  <Fragment>
    <div className='toastify-header pb-0'>
      <div className='title-wrapper'>
        <Avatar size='sm' color={color} icon={icon} />
        <h6 className='toast-title'>{title}</h6>
      </div>
    </div>
  </Fragment>
)

const AddEventSidebar = props => {
  // ** Props
  const {
    store,
     dispatch,
    open,
    handleAddEventSidebar,
    calendarsColor,
    calendarApi,
    refetchEvents,
    addEvent,
    selectEvent,
    updateEvent,
    removeEvent
  } = props
  
  // ** Vars
  const selectedEvent = store.selectedEvent
  const { register, errors, handleSubmit } = useForm()

  // ** States
  const [url, setUrl] = useState('')
  const [uuidd, setUuidd] = useState('')
  const [desc, setDesc] = useState('')
  const [title, setTitle] = useState('')
  const [guests, setGuests] = useState({})
  const [guests1, setGuests1] = useState({})
  const [allDay, setAllDay] = useState(false)
  const [location, setLocation] = useState('')
  const [endPicker, setEndPicker] = useState(new Date())
  const [startPicker, setStartPicker] = useState(new Date())
  const [value, setValue] = useState({ value: 'Unassigned', label: 'Unassigned', color: 'danger' })
  const [showStaff, setShowStaff] = useState(false)
  const [currentPage, setCurrentPage] = useState(1)
  const [currentPage1, setCurrentPage1] = useState(1)
  useEffect(() => {
    if (value.value === 'Unassigned') {
    setShowStaff(false)
  } else {
    setShowStaff(true)
  }
}, [value])

useEffect(() => {
    
  dispatch(Staffs(currentPage))
 
}, [dispatch, currentPage])

const data = useSelector(state => state.Staffs)
 const datas = (data.staffs?.staff)


 useEffect(() => {
    
  dispatch(Clients(currentPage1))
 
}, [dispatch, currentPage1])
  const events = useSelector(state => state?.Event?.event)

const data1 = useSelector(state => state.Clients)
const datas1 = (data1.client?.clients)
  // ** Select Options
  const options = [
    { value: 'Assigned', label: 'Assigned', color: 'primary' },
    { value: 'Unassigned', label: 'Unassigned', color: 'danger' }
  ]
 
const getStaff =   datas?.map((data) => {
    return { value: data?.name, label: data?.name, id:data?.id}
  })

const getClient =   datas1?.map((data) => {
    return { value: data?.name, label: data?.name, id:data?.id}
  })


  // ** Custom select components
  const OptionComponent = ({ data, ...props }) => {
    return (
      <components.Option {...props}>
        <span className={`bullet bullet-${data.color} bullet-sm mr-50`}></span>
        {data.label}
      </components.Option>
    )
  }

  const GuestsComponent = ({ data, ...props }) => {
    return (
      <components.Option {...props}>
        <div className='d-flex flex-wrap align-items-center'>
          <div>{data.label}</div>
        </div>
      </components.Option>
    )
  }
  console.log(guests1)

  // ** Adds New Event
  const handleAddEvent = () => {
    
    guests1.forEach(element => {
      if (Object.keys(guests).length === 0) {
        const obj = {
          title,
          start_date: startPicker,
          end_date: endPicker,
          client_id: element.id,
          staff_id: '',
          client_rate: desc,
          rateArray:''
        }

        dispatch(addEvents(obj))

      } else {
        guests.forEach((e) => {
          let obj = {
            title,
            start_date: startPicker,
            end_date: endPicker,
            client_id: element.id,
            staff_id: e.id,
            client_rate: desc
          }
          const getarray = datas?.find(({id}) => id === obj.staff_id)
          console.log(getarray)
          const rateArray = getarray.rate
          console.log(rateArray)
          obj = {...obj, rateArray}
          dispatch(addEvents(obj))
          
        })
      }
    })
    
    dispatch(loadEvent())
    handleAddEventSidebar()
    toast.success(<ToastComponent title='Event Added' color='success' icon={<Check />} />, {
      autoClose: 2000,
      hideProgressBar: true,
      closeButton: false
    })
  }

  // ** Reset Input Values on Close
  const handleResetInputValues = () => {
    dispatch(selectEvent({}))
    setTitle('')
    setAllDay(false)
    setUrl('')
    setLocation('')
    setDesc('')
    setGuests({})
    setValue([{ value: 'Assigned', label: 'Assigned', color: 'primary' }])
    setStartPicker(new Date())
    setEndPicker(new Date())
  }
console.log(guests)
  // ** Set sidebar fields
  const handleSelectedEvent = () => {
    if (!isObjEmpty(selectedEvent)) {
      const calendar = selectedEvent.extendedProps.calendar
      const id = selectedEvent.id
      const data = events.find((event) => event.uuid === id)
      const staffname = datas.find(({ id }) => id === data.staff_id)
      const clientname = datas1.find(({id}) => id === data.client_id)
      const staffdata = [{value: staffname?.name, label: staffname?.name, id: staffname?.id}]
      const clientdata = [{ value: clientname?.name, label: clientname?.name, id: clientname?.id }]
      console.log(clientdata)
      const resolveLabel = () => {
        if (data?.statusUnassigned) {
          return { value: 'Unassigned', label: 'Unassigned', color: 'danger' }
        } else {
          return { value: 'Assigned', label: 'Assigned', color: 'primary' }
        }
      }
      setUuidd(id)
      setTitle(selectedEvent.title || title)
      setAllDay(selectedEvent.allDay || allDay)
      setUrl(selectedEvent.url || url)
      setLocation(selectedEvent.extendedProps.location || location)
      setDesc(data.client_rate || desc)
     data?.statusUnassigned ?  setGuests('') :  setGuests(staffdata || guests)
      setGuests1(clientdata || guests1)
      setStartPicker(new Date(selectedEvent.start))
      setEndPicker(selectedEvent.allDay ? new Date(selectedEvent.start) : new Date(selectedEvent.end).toISOString().slice(0, 10))
      setValue([resolveLabel()])
    }
  }

  // ** (UI) updateEventInCalendar
  const updateEventInCalendar = (updatedEventData, propsToUpdate, extendedPropsToUpdate) => {
    const existingEvent = calendarApi.getEventById(updatedEventData.id)

    // ** Set event properties except date related
    // ? Docs: https://fullcalendar.io/docs/Event-setProp
    // ** dateRelatedProps => ['start', 'end', 'allDay']
    // ** eslint-disable-next-line no-plusplus
    for (let index = 0; index < propsToUpdate.length; index++) {
      const propName = propsToUpdate[index]
      existingEvent.setProp(propName, updatedEventData[propName])
    }

    // ** Set date related props
    // ? Docs: https://fullcalendar.io/docs/Event-setDates
    existingEvent.setDates(updatedEventData.start, updatedEventData.end, { allDay: updatedEventData.allDay })

    // ** Set event's extendedProps
    // ? Docs: https://fullcalendar.io/docs/Event-setExtendedProp
    // ** eslint-disable-next-line no-plusplus
    for (let index = 0; index < extendedPropsToUpdate.length; index++) {
      const propName = extendedPropsToUpdate[index]
      existingEvent.setExtendedProp(propName, updatedEventData.extendedProps[propName])
    }
  }

  // ** Updates Event in Store
  const handleUpdateEvent = () => {
   guests1.forEach(element => {
      if (Object.keys(guests).length === 0) {
        const obj = {
            uuidd,
          title,
          start_date: startPicker,
          end_date: endPicker,
          client_id: element.id,
          staff_id: '',
          client_rate: desc
        }
      console.log(obj)

        dispatch(updateEvent(obj, uuid))

      } else {
        guests.forEach((e) => {
          const obj = {
            uuidd,
            title,
            start_date: startPicker,
            end_date: endPicker,
            client_id: element.id,
            staff_id: e.id,
            client_rate: desc
          }
      console.log(obj)
          dispatch(updateEvent(obj))
          
        })
      }
    })

    // updateEventInCalendar(eventToUpdate, propsToUpdate, extendedPropsToUpdate)
    handleAddEventSidebar()
    toast.success(<ToastComponent title='Event Updated' color='success' icon={<Check />} />, {
      autoClose: 2000,
      hideProgressBar: true,
      closeButton: false
    })
  }

  // ** (UI) removeEventInCalendar
  const removeEventInCalendar = eventId => {
    calendarApi.getEventById(eventId).remove()
  }
  const handleDeleteEvent = () => {
    dispatch(removeEvent(selectedEvent.id))
    removeEventInCalendar(selectedEvent.id)
    handleAddEventSidebar()
    toast.error(<ToastComponent title='Event Removed' color='danger' icon={<Trash />} />, {
      autoClose: 2000,
      hideProgressBar: true,
      closeButton: false
    })
  }

  // ** Event Action buttons
  const EventActions = () => {
    if (isObjEmpty(selectedEvent) || (!isObjEmpty(selectedEvent) && !selectedEvent.title.length)) {
      return (
        <Fragment>
          <Button.Ripple className='mr-1' type='submit' color='primary'>
            Add
          </Button.Ripple>
          <Button.Ripple color='secondary' type='reset' onClick={handleAddEventSidebar} outline>
            Cancel
          </Button.Ripple>
        </Fragment>
      )
    } else {
      return (
        <Fragment>
          <Button.Ripple
            className='mr-1'
            color='primary'
            onClick={handleUpdateEvent}
          >
            Update
          </Button.Ripple>
          <Button.Ripple color='danger' onClick={handleDeleteEvent} outline>
            Delete
          </Button.Ripple>
        </Fragment>
      )
    }
  }

  // ** Close BTN
  const CloseBtn = <X className='cursor-pointer' size={15} onClick={handleAddEventSidebar} />

  return (
    <Modal
      isOpen={open}
      toggle={handleAddEventSidebar}
      className='sidebar-lg'
      contentClassName='p-0'
      onOpened={handleSelectedEvent}
      onClosed={handleResetInputValues}
      modalClassName='modal-slide-in event-sidebar'
    >
      <ModalHeader className='mb-1' toggle={handleAddEventSidebar} close={CloseBtn} tag='div'>
        <h5 className='modal-title'>
          {selectedEvent && selectedEvent.title && selectedEvent.title.length ? 'Update' : 'Add'} Event
        </h5>
      </ModalHeader>
      <ModalBody className='flex-grow-1 pb-sm-0 pb-3'>
        <Form
          onSubmit={handleSubmit(data => {
            if (isObjEmpty(errors)) {
              if (isObjEmpty(selectedEvent) || (!isObjEmpty(selectedEvent) && !selectedEvent.title.length)) {
                handleAddEvent()
              } else {
                handleUpdateEvent()
              }
              handleAddEventSidebar()
            }
          })}
        >
          <FormGroup>
            <Label for='title'>
              Title<span className='text-danger'>*</span>
            </Label>
            <Input
              id='title'
              name='title'
              placeholder='Title'
              value={title}
              onChange={e => setTitle(e.target.value)}
              innerRef={register({ register: true, validate: value => value !== '' })}
              className={classnames({
                'is-invalid': errors.title
              })}
            />
          </FormGroup>

          <FormGroup>
            <Label for='label'>Label</Label>
            <Select
              id='label'
              value={value}
              options={options}
              theme={selectThemeColors}
              className='react-select'
              classNamePrefix='select'
              isClearable={false}
              onChange={data => setValue(data)}
              components={{
                Option: OptionComponent
              }}
            />
          </FormGroup>

          <FormGroup>
            <Label for='startDate'>Start Date</Label>
            <Flatpickr
              required
              id='startDate'
              // tag={Flatpickr}
              name='startDate'
              className='form-control'
              onChange={date => setStartPicker(date[0])}
              value={startPicker}
              options={{
                enableTime: allDay === false,
                dateFormat: 'Y-m-d H:i'
              }}
            />
          </FormGroup>

          <FormGroup>
            <Label for='endDate'>End Date</Label>
            <Flatpickr
              required
              id='endDate'
              // tag={Flatpickr}
              name='endDate'
              className='form-control'
              onChange={date => setEndPicker(date[0])}
              value={endPicker}
              options={{
                enableTime: allDay === false,
                dateFormat: 'Y-m-d H:i'
              }}
            />
          </FormGroup>

          <FormGroup>
            <Label for='guests'>Select Client</Label>
            <Select
              isMulti
              id='guests'
              className='react-select '
              classNamePrefix='select '
              isClearable={false}
              options={getClient}
              theme={selectThemeColors}
              value={guests1.length ? [...guests1] : null}
              onChange={data => setGuests1([...data])}
              components={{
                Option: GuestsComponent
              }}
            />
          </FormGroup>

          <FormGroup>
            <Label for='guests'>Select Staffs</Label>
            <Select
              isMulti
              id='guests' 
              className='react-select '
              classNamePrefix='select '
              isClearable={false}
              options={showStaff ? getStaff : []}
              theme={selectThemeColors}
              value={guests.length ? [...guests] : null}
              onChange={data => setGuests([...data])}
              components={showStaff && ({Option: GuestsComponent})}
            />
          </FormGroup>
          <FormGroup>
            <Label for='client-rate'>Client Rate<span className='text-danger'>*</span></Label>
            <Input
              name='client-rate'
              type='number'
              id='client-rate'
              value={desc}
              onChange={e => setDesc(e.target.value)}
               innerRef={register({ register: true, validate: value => value !== '' })}
              placeholder='Client Rate'
                className={classnames({
                'is-invalid': errors.desc
              })}
            />
          </FormGroup>
          <FormGroup className='d-flex'>
            <EventActions />
          </FormGroup>
        </Form>
      </ModalBody>
    </Modal>
  )
}

export default AddEventSidebar