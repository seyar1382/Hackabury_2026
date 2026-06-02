import os
import threading
import requests
from webview.webview import Webview


def webview_start():
    webview = Webview()
    webview.title = "Wallet Pass Creator"
    current_dir = os.path.dirname(os.path.abspath(__file__))
    html_path = os.path.join(current_dir, 'index.html')
    webview.navigate(f"file://{html_path}")

    # bind python to java script
    webview.bind("fetch_title", fetch_title)
    webview.bind("fetch_icon", fetch_icon)
    webview.bind("fetch_description", fetch_description)

    webview.run()

def fetch_title(URL):
    html = fetch_html_file(URL)
    start = html.find("<title>")
    end = html.find("</title>")
    title = html[start+7:end]
    return title

def fetch_icon(URL):
    html = fetch_html_file(URL)
    start = html.find('<link')
    html_short = html[start:]
    end = html_short.find(">")
    icon = html_short[:end]
    start = icon.find("href=")
    url = icon[start+6:]
    end = url.find('"')
    icon = url[:end]
    return icon

def fetch_description(URL):
    html = fetch_html_file(URL)
    start = html.find('<meta')
    description = html[start:]
    start = description.find("description")
    short_description = description[start:]
    start = short_description.find("content")
    end = short_description.find(">")
    shorted_short_description = short_description[start+9:end-1]
    print(shorted_short_description)
    return shorted_short_description
    
def fetch_html_file(URL):
    response = requests.get(URL)
    html = response.text
    return html

webview_start()
