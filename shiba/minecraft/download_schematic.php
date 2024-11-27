<?php
// Check if the 'file' parameter is set and not empty
if (isset($_GET['file']) && !empty($_GET['file'])) {
    // Sanitize the file parameter
    $file = basename($_GET['file']); // basename ensures no directory traversal
    $filePath = 'files/schematics/' . $file; // Construct the file path

    // Debugging: Print the file path for testing
    if (!file_exists($filePath)) {
        // Uncomment this line during debugging to check the file path
        // echo "File not found: " . $filePath;
        header('Location: notavailable.html');
        exit;
    }

    // If the file exists, process the download
    if (file_exists($full_file_path)) {
            // Set headers to force download with the title as the filename
            header('Content-Description: File Transfer');
            header('Content-Type: application/octet-stream');
            header('Content-Disposition: attachment; filename="' . $title . '.litematica"');
            header('Content-Length: ' . filesize($full_file_path));
            readfile($full_file_path);
            exit;

        // Read and output the file
        readfile($filePath);
        exit;
    } else {
        // If file doesn't exist, redirect to notavailable.html
        header('Location: notavailable.html');
        exit;
    }
} else {
    // Redirect to notavailable.html if 'file' parameter is missing or empty
    header('Location: notavailable.html');
    exit;
}
?>
