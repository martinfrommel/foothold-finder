# Foothold Finder 🧗‍♀️

Foothold Finder is a project for rock climbers, gyms, and communities. It helps users discover and share information about climbing routes, gyms, and communities in their area.

## Features ⚡️

- User authentication and profile management 🔐
- Climbing diary to keep track of personal climbs 📔
- Browse and search for climbing routes, crags, and areas 🗺️
- Explore and rate climbing gyms 🧗‍♂️
- Join and contribute to local climbing communities 🤝
- Buy and sell climbing gear through listings 🛍️

## Public Availability 🌐

Please note that only the first version of Foothold Finder will be made available to the public for reference purposes. Future updates will be kept proprietary for the time being.

## Getting Started 🚀

### Prerequisites 📋

- Node.js (v14.x or later recommended) 💻
- PostgreSQL database 🐘
- Supabase or another authentication provider 🔑

### Installation 🔧

1. Clone the repository:

        git clone https://github.com/martinfrommel/foothold-finder.git
        cd foothold-finder

2. Install dependencies:

        yarn install

3. Set up environment variables:

Copy the `.env.example` file to `.env` and fill in your database and authentication provider credentials.

        cp .env.example .env

4. Run database migrations:

        yarn rw prisma migrate dev --name init

5. Start the development server:

        yarn run dev

## Contributing ✍️

Contributions are welcome! Please read our [Contributing Guide](CONTRIBUTING.md) for more information on how to get involved.

## License 📄

This project is licensed under the [MIT License](LICENSE.md).





