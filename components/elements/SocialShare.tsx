/* eslint-disable @typescript-eslint/no-unused-vars */
import { CopyIcon } from '@radix-ui/react-icons'
import {
  EmailIcon,
  EmailShareButton,
  FacebookIcon,
  FacebookShareButton,
  LineIcon,
  LineShareButton,
  LinkedinIcon,
  LinkedinShareButton,
  TwitterIcon,
  TwitterShareButton,
  WhatsappIcon,
  WhatsappShareButton
} from 'react-share'
import { useCopyToClipboard } from 'usehooks-ts'

import { Button } from '../ui/button'
import { Input } from '../ui/input'

export default function SocialShare() {
  const url = window.location.href
  const [value, copy] = useCopyToClipboard()
  return (
    <div className="flex flex-col gap-8">
      <div className="flex flex-wrap items-center gap-2">
        <WhatsappShareButton url={url}>
          <WhatsappIcon size={40} round />
        </WhatsappShareButton>
        <FacebookShareButton url={url}>
          <FacebookIcon size={40} round />
        </FacebookShareButton>
        <TwitterShareButton url={url}>
          <TwitterIcon size={40} round />
        </TwitterShareButton>
        <LinkedinShareButton url={url}>
          <LinkedinIcon size={40} round />
        </LinkedinShareButton>
        <LineShareButton url={url}>
          <LineIcon size={40} round />
        </LineShareButton>
        <EmailShareButton url={url}>
          <EmailIcon size={40} round />
        </EmailShareButton>
      </div>
      <div>
        <p className="mb-1 text-xs text-neutral-600 dark:text-neutral-400">Copy the link</p>
        <div className="flex items-center space-x-2">
          <Input type="text" readOnly value={url} />
          <Button type="submit" size="sm" className="px-3" onClick={() => copy(url)}>
            <span className="sr-only">Copy</span>
            <CopyIcon />
          </Button>
        </div>
      </div>
    </div>
  )
}
