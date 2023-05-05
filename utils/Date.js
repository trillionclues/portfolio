export const formatDate = () => {
  const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
  const months = [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'Jul',
    'Aug',
    'Sep',
    'Oct',
    'Nov',
    'Dec',
  ]

  const date = new Date()

  const day = days[date.getDay()]
  const month = months[date.getMonth()]
  const dayOfMonth = ('0' + date.getDate()).slice(-2)
  const year = date.getFullYear()

  const formattedDate = `${day} ${month} ${dayOfMonth} ${year}`

  return formattedDate
}
