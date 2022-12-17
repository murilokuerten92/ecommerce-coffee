import projectIcons from '@/assets/icons/project'

const iconCatalog: any = {
  ...projectIcons,
}

export const Icon = (props: {
  icon: string
  color?: string
  width?: string
  height?: string
}) => {
  const targetIcon: any = iconCatalog[props.icon]

  if (!targetIcon) return null
  return (
    <>
      {typeof targetIcon === 'function'
        ? targetIcon(props.color, props.width, props.height)
        : targetIcon}
    </>
  )
}
