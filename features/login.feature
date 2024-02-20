Feature: Login

    Scenario: User can log in using valid credentials
        Given I am on the home page
        When I click on the Sign In link
        And I enter email "roiquittigrauyei-9048@yopmail.com"
        And I enter password "qwerty123!"
        And I click the Sign In button
        Then I see the welcome message "Welcome, Test Test!"
        And My Account page contains email "roiquittigrauyei-9048@yopmail.com"
