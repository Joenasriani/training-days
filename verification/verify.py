
from playwright.sync_api import sync_playwright

def verify_app():
    with sync_playwright() as p:
        browser = p.chromium.launch(headless=True)
        page = browser.new_page()
        try:
            page.goto("http://localhost:3000")

            # Wait for the AI Card to be visible
            # It has "The AI Card" text
            ai_card_header = page.get_by_role("heading", name="The AI Card")
            ai_card_header.wait_for()

            # Scroll to it
            ai_card_header.scroll_into_view_if_needed()

            # Take a screenshot
            page.screenshot(path="verification/ai_card.png")
            print("Screenshot taken")

        except Exception as e:
            print(f"Error: {e}")
        finally:
            browser.close()

if __name__ == "__main__":
    verify_app()
