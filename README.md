<img width="980" height="546" alt="WhatsApp Image 2026-05-03 at 1 09 49 AM" src="https://github.com/user-attachments/assets/0f2d629a-3006-4b12-99bc-1d71ff7627d3" />



<img width="980" height="546" alt="WhatsApp Image 2026-05-03 at 1 09 49 AM" src="https://github.com/user-attachments/assets/f0110ac1-f074-4a6f-abd6-12a83adb3fe8" />



🐳 What is Docker?
Docker is an open-source platform that automates the deployment of applications inside lightweight, portable containers. It allows developers to package an application with all of its dependencies (libraries, frameworks, and configurations) into a single unit. This ensures that the application runs consistently regardless of the environment it is running in—be it a local machine, a testing server, or the cloud.

🚀 Key Features
Portability: Once you "Dockerize" an application, it can run on any system that has Docker installed without needing manual configuration.

Isolation: Docker containers are isolated from each other and the host system, meaning different projects with conflicting dependencies can run on the same machine without issues.

Lightweight: Unlike Virtual Machines (VMs), containers share the host's OS kernel, making them much faster to start and more efficient in memory usage.

Scalability: You can easily spin up multiple instances of a container to handle more traffic.

Version Control for Infrastructure: Using Dockerfiles, you can version control your environment setup just like your code.

🛠️ Core Functional Components
Dockerfile: A text document containing all the commands a user could call on the command line to assemble an image. It acts as the "recipe" for your container.

Docker Image: A read-only template used to create containers. It includes the application code, runtime, tools, and libraries.

Docker Container: A running instance of an image. You can start, stop, move, or delete a container using Docker API or CLI.

Docker Hub: A cloud-based repository where you can find and share container images (like GitHub but for Docker images).

Docker Compose: A tool for defining and running multi-container applications. It uses a YAML file to configure your application's services (like connecting a Next.js frontend with a Bun backend).

❓ Why use Docker for this Project?
In this task, Docker was used to bridge the gap between the Next.js frontend and Bun backend. By using docker-compose, we ensure that:

The backend always starts before the frontend (depends_on).

Ports are correctly mapped (e.g., internal Bun port 3000 to local port 8080) to avoid conflicts.

Developers don't need to manually install Bun or Node.js on their system; Docker handles the environment setup automatically.



Challenges Faced & Solutions
During the Dockerization of the Next.js frontend and Bun backend, I encountered several technical complexities. Below are the details along with their resolutions:

1. Permission Issues with C:\ProgramData\DockerDesktop
Complexity: During the installation of Docker Desktop on Windows, the installer failed with a security error stating that the directory must be owned by an elevated account.

Cause: This usually happens when the system's folder permissions are restricted or held by a non-admin process, preventing Docker from creating necessary service files.

Solution: I used the Windows Command Prompt (CMD) as Administrator and executed the takeown and icacls commands to manually grant ownership and full control permissions to the "Administrators" group for that specific path.

2. Docker Compose Command Compatibility
Complexity: Running the traditional docker-compose up command resulted in a "command not found" or "not recognized" error in the PowerShell terminal.

Cause: Newer versions of Docker Desktop have integrated Compose into the main Docker CLI. Therefore, the legacy hyphenated command (docker-compose) is sometimes not registered in the system's PATH.

Solution: Switched to the modern command docker compose (without the hyphen). This utilizes the Docker CLI's built-in V2 compose functionality, which resolved the execution error.

3. Port Mapping & Service Connectivity
Complexity: Ensuring the Next.js frontend could communicate with the Bun backend while running in isolated containers.

Cause: Containers run in their own network. Mapping ports incorrectly (e.g., trying to access the internal container port instead of the host-mapped port) can lead to connection timeouts.

Solution: In the docker-compose.yml file, I used the ports attribute to map the backend's internal port 3000 to the host port 8080. I also implemented depends_on to ensure the backend service starts and is ready before the frontend service initializes.
