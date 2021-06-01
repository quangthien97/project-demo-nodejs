module.exports = {
  constants: {
    modalOnDelete: { onDelete: 'cascade' },

    userRoles: {
      admin: 'ADMIN',
      user: 'USER',
      contributor: 'CONTRIBUTOR',
    },

    userStatus: {
      active: 'ACTIVE',
      inactive: 'INACTIVE',
      deleted: 'DELETED',
    },

    sshKeyRegex:
      /^(ssh-rsa AAAAB3NzaC1yc2|ecdsa-sha2-nistp256 AAAAE2VjZHNhLXNoYTItbmlzdHAyNT|ecdsa-sha2-nistp384 AAAAE2VjZHNhLXNoYTItbmlzdHAzODQAAAAIbmlzdHAzOD|ecdsa-sha2-nistp521 AAAAE2VjZHNhLXNoYTItbmlzdHA1MjEAAAAIbmlzdHA1Mj|ssh-ed25519 AAAAC3NzaC1lZDI1NTE5|ssh-dss AAAAB3NzaC1kc3)[0-9A-Za-z+/]+[=]{0,3}( .*)?$/,

    allowReceiptImage: [
      'image/jpeg',
      'image/jpg',
      'image/png',
      'image/gif',
      'application/pdf',
    ],
    allowTypeImage: [
      'image/png',
      'image/jpg',
      'image/svg',
      'image/jpeg',
      'image/gif',
    ],
  },
};
