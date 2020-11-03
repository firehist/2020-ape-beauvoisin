console.log('Here we are 😆🚀')

const selectElementContents = (el) => {
    let body = document.body, range, sel
    if (document.createRange && window.getSelection) {
        range = document.createRange()
        sel = window.getSelection()
        sel.removeAllRanges()
        try {
            range.selectNodeContents(el)
            sel.addRange(range)
        } catch (e) {
            range.selectNode(el)
            sel.addRange(range)
        }
        document.execCommand("copy")
    } else if (body.createTextRange) {
        range = body.createTextRange()
        range.moveToElementText(el)
        range.select()
        range.execCommand("Copy")
    }
}

const signature = () => {
    const url = `${location.origin}${location.pathname.replace(/\/index(.*)/, '')}`
    return `<table>
        <tbody>
      <tr>
      <td style="padding-bottom: 20px" colspan="7">
        <div style="margin-block-start: 0px; font-weight:bold; font-size:18px; color:#267CD9; font-family:Georgia; padding-bottom: 20px;">
            <img height="40px" src="${url}/assets/logo-ape-beauvoisin-2020.jpg" /> L'équipe APE Maternelle 2020
        </div>
          <div style="font-family: Avenir-Book; font-size: 14px; color: #6A6F7D; letter-spacing: 0.82px; line-height: 26px; padding-bottom: 12px;">
             <img width="22px" height="22px" src="${url}/assets/i_mail.png" /> ape.beauvoisin30@gmail.com <br/>
            <a href="https://www.facebook.com/apebeauvoisin" target="_blank" style="text-decoration: none;color: #6A6F7D;line-height: 22px;display: inline-block;">
                <img width="22px" height="22px" src="${url}/assets/i_facebook.png" /> https://www.facebook.com/apebeauvoisin
            </a>
          </div>
        </td>
      </tr>
      <tr>
        <td style="padding: 0 5px;" valign="top" align="center" width="60px">
          <img width="60px" height="60px" src="${url}/assets/avatar_aurelie.png" />
        </td>
        <td style="padding: 0 5px;" valign="top" align="center" width="60px">
          <img width="60px" height="60px" src="${url}/assets/avatar_celine.png" />
        </td>
        <td style="padding: 0 5px;" valign="top" align="center" width="60px">
          <img width="60px" height="60px" src="${url}/assets/avatar_lauranne.png" />
        </td>
        <td style="padding: 0 5px;" valign="top" align="center" width="60px">
          <img width="60px" height="60px" src="${url}/assets/avatar_magalie.png" />
        </td>
        <td style="padding: 0 5px;" valign="top" align="center" width="60px">
          <img width="60px" height="60px" src="${url}/assets/avatar_nicolas.png" />
        </td>
        <td style="padding: 0 5px;" valign="top" align="center" width="60px">
          <img width="60px" height="60px" src="${url}/assets/avatar_perrine.png" />
        </td>
        <td style="padding: 0 5px;" valign="top" align="center" width="60px">
          <img width="60px" height="60px" src="${url}/assets/avatar_vanessa.png" />
        </td>
      </tr>
      <tr>
        <td style="padding: 0 20px;" valign="top" align="center" width="90px">
          <div style="margin-block-start: 0px; font-weight:bold; font-size:16px; color:#267CD9; font-family:Georgia;">
            Aurélie
          </div>
        </td>
        <td style="padding: 0 20px;" valign="top" align="center" width="90px">
          <div style="margin-block-start: 0px; font-weight:bold; font-size:16px; color:#267CD9; font-family:Georgia;">
            Céline
          </div>
        </td>
        <td style="padding: 0 20px;" valign="top" align="center" width="90px">
          <div style="margin-block-start: 0px; font-weight:bold; font-size:16px; color:#267CD9; font-family:Georgia;">
            Lauranne
          </div>
        </td>
        <td style="padding: 0 20px;" valign="top" align="center" width="90px">
          <div style="margin-block-start: 0px; font-weight:bold; font-size:16px; color:#267CD9; font-family:Georgia;">
            Magalie
          </div>
        </td>
        <td style="padding: 0 20px;" valign="top" align="center" width="90px">
          <div style="margin-block-start: 0px; font-weight:bold; font-size:16px; color:#267CD9; font-family:Georgia;">
            Nicolas
          </div>
        </td>
        <td style="padding: 0 20px;" valign="top" align="center" width="90px">
          <div style="margin-block-start: 0px; font-weight:bold; font-size:16px; color:#267CD9; font-family:Georgia;">
            Perrine
          </div>
        </td>
        <td style="padding: 0 20px;" valign="top" align="center" width="90px">
          <div style="margin-block-start: 0px; font-weight:bold; font-size:16px; color:#267CD9; font-family:Georgia;">
            Vanessa
          </div>
        </td>
      </tr>
    </tbody>
  </table>`
}

const app = () => {
    const $inputHidden = $('#input-hidden')
    const $signature = $('#signature')
    const $signatureTabs = $('#signature .block__tab label')
    const $tabContent = $('#tab-content')
    const $btnCopy = $('#btn-copy')
    const $btnCopyHtml = $('#btn-copy-html')

    let currentSignature = signature()
    $inputHidden.val(currentSignature)
    updateTabContent()

    // Handle copy button
    $btnCopy.click(() => {
        selectElementContents($tabContent[0].getElementsByTagName('table')[0])
        $('.toast-clicked').toast('show')
    })

    // Handle copy button
    $btnCopyHtml.click(() => {
        $inputHidden[0].select()
        document.execCommand("copy")
        $('.toast-clicked').toast('show')
    })

    // Update the tab content depending on the type
    function updateTabContent() {
        $tabContent.html(`${currentSignature}`)
    }
}

// Boot the app
app()
