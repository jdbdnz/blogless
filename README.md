# Blogless

The platform for bloggers who never wanted a blogging platform in the first place.

## Why would I want it?

Blogless is for writing, not for reading. Readers interact with your website, which serves content you wrote on Blogless. This enables you to completely control the user experience, without building your own infrastructure, patching a CMS, or messing about with deploying static content for every new post.

## Who will this be for?

Firstly, it's for me: I want to use a CDN to serve my blog, but I don't want to write code whenever I write a new post.

- designers who are savvy with HTML/CSS
- devs with better things to do that build the features Blogless offers
- anyone willing to go through some basic technical setup to avoid giving all your traffic to a blogging platform

## My vision for the workflow

### Easy option

1.  create a free account
1.  write first post
1.  use Github to fork a Blogless template
1.  copy settings to the config file of their forked template
1.  enable Github pages, and navigate to `<username>.github.io/<repo>` to view their first post
1.  edit HTML/CSS of template to their taste

### More difficult options

1.  build your own template. From scratch, or using a boiler plate (a node package to create this would be cool)
1.  Literally anything you like, it's an API after all

## Is it ready yet?

No, sorry! If you'd like to see it happen sooner, consider contributing.

## Running locally

1.  Ensure `ruby`, `bundler`, `npm`, and `yarn` are installed
1.  `bundle install` && `cd client` && `yarn install`
1.  In separate terminals
    1.  `rails s -p 3001`
    1.  `yarn start`

## To run tests

1.  test Rails with `rake`
1.  test React with `yarn run test`
