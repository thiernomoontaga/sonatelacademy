#include "controller.h"
#include "view.h"

int main()
{
    loadData();
    int choice;
    do
    {
        displayMainMenu();
        scanf("%d", &choice);
        switch (choice)
        {
        case 1:
            handleStudentLogin();
            break;
        case 2:
            handleProfessorLogin();
            break;
        case 3:
            handleAdminLogin();
            break;
        case 4:
            printf("Exiting...\n");
            break;
        default:
            printf("Invalid choice!\n");
        }
    } while (choice != 4);
    saveData();
    return 0;
}