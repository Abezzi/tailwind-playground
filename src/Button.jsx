import PropTypes from 'prop-types'

function Button({
  children,
  primary,
  secondary,
  success,
  danger,
  warning,
  outline,
  rounded
}) {
  return <button>{children}</button>
}

Button.propTypes = {
  checkVariationValue: ({ primary, secondary, success, warning, danger }) => {
    const count = Number(!!primary)
      + Number(!!secondary)
      + Number(!!success)
      + Number(!!warning)
      + Number(!!danger)
    if (count > 1)
      throw new Error('More than one type of button: primary, secondary, danger, success, warning')
  }
}

export default Button
