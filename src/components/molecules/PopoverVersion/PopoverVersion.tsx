import React, { useEffect, useState } from 'react'

import { ConfigService } from '@app/curio/SessionManager'
import Popover from '@material-ui/core/Popover'
import Typography from '@material-ui/core/Typography'
import InfoIcon from '@material-ui/icons/InfoRounded'
import { WithStyles, withStyles } from '@material-ui/styles'

import { styles } from './styles'

interface Props extends WithStyles<typeof styles> {
  service?: ConfigService
}

interface PopItem {
  key: string
  value?: string | number
  underline?: boolean
}

const PopoverVersion = (props: Props) => {
  const { classes, service } = props
  const [popItems, setPopItems] = useState<PopItem[]>([])
  const [anchor, setAnchor] = useState<HTMLDivElement | null>(null)

  useEffect(() => {
    let items: PopItem[] = [{ key: 'Versão', value: VERSION }]
    if (service) {
      items = items.concat(
        { key: 'ISAPI', value: service?.url, underline: true },
        { key: 'Serviço', value: service?.server },
        { key: 'Porta', value: service?.port },
        { key: 'Sistema', value: service?.system }
      )
    }
    setPopItems(items)
  }, [service])

  const createPopItems = (items: PopItem[]) =>
    items.map((item, i) => (
      <Typography className={classes.msg} color="textPrimary" key={i}>
        {`${item.key}: `}
        {
          <span
            style={{ textDecoration: item.underline ? 'underline' : undefined }}
          >
            {item.value || ''}
          </span>
        }
      </Typography>
    ))

  return (
    <div className={classes.root}>
      <div onClick={(evt) => setAnchor(evt.currentTarget)}>
        <InfoIcon className={classes.infoBtn} color="primary" />
      </div>
      <Popover
        id="version-popover"
        open={!!anchor}
        anchorEl={anchor}
        onClose={() => setAnchor(null)}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'left'
        }}
        transformOrigin={{
          vertical: 'bottom',
          horizontal: 'right'
        }}
      >
        <div className={classes.popoverContent}>{createPopItems(popItems)}</div>
      </Popover>
    </div>
  )
}
export default withStyles(styles)(PopoverVersion)
