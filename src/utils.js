export const formatDate = (inputDateString) => {
  const inputDate = new Date(inputDateString)

  const options = {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
    second: 'numeric',
  }

  const formattedDateString = new Intl.DateTimeFormat('en-US', options)
    .format(inputDate)
    .toUpperCase()

  return formattedDateString
}

export const formatDuration = (seconds) => {
  const hours = Math.floor(seconds / 3600)
  const totalSeconds = Math.round(seconds)
  const minutes = Math.floor((totalSeconds % 3600) / 60)
  const remainingSeconds = totalSeconds % 60

  const formattedHours = String(hours).padStart(2, '0')
  const formattedMinutes = String(minutes).padStart(2, '0')
  const formattedSeconds = String(remainingSeconds).padStart(2, '0')

  const duration = `${
    hours > 0 ? `${formattedHours}:` : ''
  }${formattedMinutes}:${formattedSeconds}`

  return duration
}

export const isStrongPassword = (password) => {
  const minLength = 8
  const hasUpperCase = /[A-Z]/.test(password)
  const hasLowerCase = /[a-z]/.test(password)
  const hasDigit = /\d/.test(password)
  const hasSpecialChar = /[!@#$%^&*()_+{}[\]:;]/.test(password)

  return (
    password &&
    password.length >= minLength &&
    hasUpperCase &&
    hasLowerCase &&
    hasDigit &&
    hasSpecialChar
  )
}
