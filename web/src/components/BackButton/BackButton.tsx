// src/components/BackButton/BackButton.tsx
import { Button } from 'react-daisyui'

interface BackButtonProps {
  className?: string
  buttonLabel?: string
  buttonColor?:
    | 'secondary'
    | 'primary'
    | 'accent'
    | 'ghost'
    | 'info'
    | 'success'
    | 'warning'
    | 'error'
  onClick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void
}

const BackButton: React.FC<BackButtonProps> = ({
  className = '',
  buttonLabel = 'Go Back',
  buttonColor = 'secondary',
  onClick,
}) => {
  const goBack = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    event.preventDefault()

    if (onClick) {
      onClick(event)
    } else {
      const previousLocation = document.referrer
      const currentLocation = window.location.href

      if (window.history.length > 1 && previousLocation !== currentLocation) {
        // If there's a previous location in the history and it's not the same as the current location, navigate back
        window.history.back()
      } else {
        // If there's no previous location or it's the same as the current location, navigate to the home page
        window.location.assign('/')
      }
    }
  }

  return (
    <Button className={className} color={buttonColor} onClick={goBack}>
      {buttonLabel}
    </Button>
  )
}

export default BackButton
