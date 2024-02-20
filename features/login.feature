Feature: Login

    Scenario: User can log in using valid credentials
        Given I am on the home page
        When I click on the Sign In link
        And I enter "roiquittigrauyei-9048@yopmail.com" into Email input field
        And I enter "qwerty123!" into Password input field
        And I click the Sign In button
        Then I see the welcome message "Welcome, Test Test!"
        And My Account page contains email "roiquittigrauyei-9048@yopmail.com"
