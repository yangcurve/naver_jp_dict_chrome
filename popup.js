chrome.tabs.query({ active: true, currentWindow: true }, ([{ id }]) => {
  chrome.scripting.executeScript(
    {
      target: { tabId: id },
      function: () => window.getSelection().toString(),
    },
    ([{ result }]) => {
      const iframe = document.getElementById('iframe')
      const url = 'https://ja.dict.naver.com/#/mini'

      if (!result) iframe.src = `${url}/main`
      else iframe.src = `${url}/search?query=${result}`
    }
  )
})
