import className from 'classnames';

function Button({
  children,
  primary,
  secondary,
  success,
  danger,
  warning,
  outline,
  rounded,
  ...rest
}) {
  const classes = className('flex gap-2 item-center px-3 py-1.5 border', {
    'border-blue-500 bg-blue-500 text-white': primary,
    'border-gray-500 bg-gray-500 white-white': secondary,
    'border-yellow-500 bg-yellow-500 text-white': warning,
    'border-red-500 bg-red-500 text-white': danger,
    'border-green-500 bg-green-500 text-white': success,
    'rounded-full': rounded,
    'bg-white': outline,
    'text-blue-500 outline-blue-500': outline && primary,
    'text-gray-500 outline-gray-500': outline && secondary,
    'text-yellow-500 outline-yellow-500': outline && warning,
    'text-red-500 outline-red-500': outline && danger,
    'text-green-500 outline-green-500': outline && success,
  });

  return <button {...rest} className={classes}>{children}</button>
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
